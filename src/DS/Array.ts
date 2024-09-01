export class Array {
  private length: number;
  private data: object;

  public constructor() {
    this.data = {};
    this.length = 0;
  }

  public getData(): any {
    return this.data;
  }

  public get(index: number): any {
    return this.data[index];
  }

  public push(item: any): void {
    this.data[this.length] = item;
    this.length++;
    return;
  }

  public insert(item: any, index: number): void {
    if (this.length === 0) return;
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = item;
    this.length++;
    return;
  }

  public search(item: any): string {
    for (let i = 0; i < this.length - 1; i++) {
      if (this.data[i] === item) return `Found: ${this.data[i]} at index: ${i}`;
    }

    return "Not found";
  }

  public sort() {
    for (let i = 1; i < this.length - 1; i++) {
      for (let j = i; j < this.length - 1; j++) {
        if (this.data[i - 1] > this.data[j]) {
          const temp = this.data[j];
          this.data[j] = this.data[i - 1];
          this.data[i - 1] = temp;
        }
      }
    }

    return this.data;
  }
}
