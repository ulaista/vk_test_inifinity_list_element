import { makeAutoObservable, runInAction, action } from "mobx";
import { fetchRepositories } from "../lib/api";

class DataStore {
  data: any[] = [];
  loading: boolean = false;
  page: number = 1;
  sortField: string = "stars";

  constructor() {
    makeAutoObservable(this, {
      fetchData: action.bound,
      editItem: action,
      deleteItem: action,
      setSortField: action,
    });
  }

  fetchData = async () => {
    this.loading = true;
    try {
      const newData = await fetchRepositories(this.page, this.sortField);
      runInAction(() => {
        this.data = [...this.data, ...newData];
        this.page += 1;
      });
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  editItem(id: number, updatedFields: { [key: string]: string }) {
    this.data = this.data.map((item) =>
      item.id === id ? { ...item, ...updatedFields } : item
    );
  }

  deleteItem = (id: number) => {
    runInAction(() => {
      this.data = this.data.filter((item) => item.id !== id);
    });
  };

  setSortField = (field: string) => {
    runInAction(() => {
      this.sortField = field;
      this.page = 1;
      this.data = [];
    });
    this.fetchData();
  };
}

const dataStore = new DataStore();
export default dataStore;
