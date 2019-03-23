class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
            this.left = node;
            node.parent = this;
            return;
        }
        if (this.right == null) {
            this.right = node;
            node.parent = this;
            return;
        }
	}

	removeChild(node) {
		if (this.left.data == node.data && this.left.priority == node.priority) {
            node.parent = null;
            this.left = null;
            return;
        }
        if (this.right.data == node.data && this.right.priority == node.priority) {
            node.parent = null;
            this.right = null;
            return;
        } else throw error();
	}

	remove() {
		
	}

	swapWithParent() {
		
	}
}

module.exports = Node;