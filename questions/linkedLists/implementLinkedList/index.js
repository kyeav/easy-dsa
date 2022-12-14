class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  print() {
    let output = "";
    let curr = this;

    while (curr) {
      // console.log(curr)
      // console.log(curr.val)
      output += `${curr.val} -> `;
      curr = curr.next;
    }
    console.log(output);
  }

  addToEnd(node) {
    let curr = this;
    let prev = null;

    while (curr) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = node;
  }

  removeByIndex(index) {
    let curr = this;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = prev.next.next;
    return curr;
  }

  addAtIndex(index, node) {
    let curr = this;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    node.next = curr;
    prev.next = node;
  }
}

// const head = new Node(1, null);
// head.next = new Node(2, null);
// head.next.next = new Node(3, null);

const head = new Node(1, new Node(2, new Node(3, null)));
// console.log(head);
head.addToEnd(new Node(4, null));
head.removeByIndex(1);
head.addAtIndex(1, new Node(2, null));
head.print();
