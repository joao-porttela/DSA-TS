export class Node {
  private value: any;
  private next: any;

  public constructor(value: any) {
    this.value = value;
    this.next = null;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: any) {
    this.value = value;
  }

  public getNext() {
    return this.next;
  }

  public setNext(next: any) {
    this.next = next;
  }
}
