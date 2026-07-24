class DynamicArray {
    dynamicArray = []
    capacity = 0
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.dynamicArray[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.dynamicArray[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.dynamicArray.length >= this.capacity) {
            this.capacity *= 2
        }
        this.dynamicArray.push(n)
    }

    /**
     * @returns {number}
     */
    popback(): number {
        return this.dynamicArray.pop()
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.dynamicArray.length
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
