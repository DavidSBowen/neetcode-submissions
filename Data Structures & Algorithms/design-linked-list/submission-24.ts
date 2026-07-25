class MyNode {
    prev: MyNode | null = null;
    next: MyNode | null = null;
    private val: number;
    constructor(val: number, next?: MyNode, prev?: MyNode) {
        this.prev = prev || null;
        this.next = next || null;
        this.val = val;
    }
    get(): number {
        return this.val;
    }
}

class MyLinkedList {
    head: MyNode | null = null;
    tail: MyNode | null = null;
    size: number = 0;

    constructor() {}

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;

        let counter: number = 0;
        let node: MyNode | null = this.head;

        while (node) {
            if (counter === index) {
                return node.get();
            }
            node = node.next;
            counter++;
        }
        return -1;
    }

    addAtHead(val: number): void {
        const newNode = new MyNode(val, this.head || undefined, undefined);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addAtTail(val: number): void {
        const newNode = new MyNode(val, undefined, this.tail || undefined);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        let counter = 0;
        let node: MyNode | null = this.head;
        while (node) {
            if (counter === index) {
                const newNode = new MyNode(val, node, node.prev || undefined);
                if (node.prev) node.prev.next = newNode;
                node.prev = newNode;
                this.size++;
                return;
            }
            node = node.next;
            counter++;
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size || !this.head) return;

        let counter = 0;
        let node: MyNode | null = this.head;

        while (node) {
            if (counter === index) {
                if (node.prev) node.prev.next = node.next;
                else this.head = node.next;
                
                if (node.next) node.next.prev = node.prev;
                else this.tail = node.prev;

                this.size--;
                return;
            }
            node = node.next;
            counter++;
        }
    }
}