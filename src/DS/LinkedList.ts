import {Array} from "./Array.js";
import {Node} from "./Node.js";

class LinkedList {
  public head: Node | null;
  public tail: Node | null;
  public length: number;

  constructor(value: number) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  print() {
    const array = new Array();
    array.push(this.head.getValue());

    for (let i = 1; i <= this.length; i++) {
      this.head = this.head.getNext();
      array.push(this.head.getValue());
    }

    return array.getData();
  }

  append(value: number) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.setNext(node);
      this.tail = this.tail.getNext();
    }

    this.length++;
    return;
  }

  insert(value: number, index: number): void {
    if (index > this.length) return;

    if (this.length <= 1) return this.append(value);

    const node = new Node(value);

    // pointer to Linked List head
    let nodes = this.head;

    for (let i = 0; i < index - 1; i++) {
      nodes = nodes.getNext();
    }

    node.setNext(nodes.getNext());
    nodes.setNext(node);
  }

  delete() {}

  reverse() {}
}

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(6);
linkedList.insert(5, 4);

console.log(linkedList.print());
