class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
		this.left = left;
		this.right = right;
  }
}

// list = [1, 4, 7]
function oneToSeven() {
	const left = new Node(1);
	const right = new Node(7);
	return new Node(4, left , right);
}

// list = [10, 40, 45, 46, 50]
/*
			45
		40	46
	10			50
 */
function tenToFifty() {
  const l2 = new Node(10);
	const l1 = new Node(40, l2);

	const r2 = new Node(50);
	const r1 = new Node (46, null, r2);

	return new Node(45, l1, r1);
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
/*
				-15
	-19				2
-20	-17		0			10
						1
*/
function negativeToPositive() {
	const r1_l2_r3 = new Node(1);
	const r1_l2 = new Node(0, null, r1_l2_r3);
	const r1_r2 = new Node(10);
	const r1 = new Node(2, r1_l2, r1_r2);

	const l1_l2 = new Node(-20);
	const l1_r2 = new Node(-17);
	const l1 = new Node(-19, l1_l2, l1_r2);

	return new Node (-15, l1, r1);
}

if (require.main === module) {
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
