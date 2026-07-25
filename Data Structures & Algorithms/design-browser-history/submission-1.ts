class MyNode {
    val: string
    prev: MyNode | null
    next: MyNode | null

    constructor(val: string, next?: MyNode | null , prev?: MyNode | null) {
        this.val = val
        this.next = next || null
        this.prev = prev || null
    }
}

class BrowserHistory {
    head: MyNode | null
    currentNode: MyNode | null
    tail: MyNode | null
    
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: string) {
        const node = new MyNode(homepage)
        this.head = node
        this.currentNode = node
        this.tail = node
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url: string) {
        // create a node for the URL
        const newNode: MyNode = new MyNode(url, null, this.currentNode)
        this.currentNode.next = newNode
        this.tail = newNode
        this.currentNode = newNode
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps: number): string {
        for (let i = 1; i <= steps; i++) {
            if (!this.currentNode.prev) {
                return this.currentNode.val
            }
            this.currentNode = this.currentNode.prev
        }
        return this.currentNode.val
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps: number): string {
        for (let i = 1; i <= steps; i++) {
            if (!this.currentNode.next) {
                return this.currentNode.val
            }
            this.currentNode = this.currentNode.next
        }
        return this.currentNode.val
    }
}
