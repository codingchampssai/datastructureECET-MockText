// disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// disable F12
document.onkeydown = function(e){
if(e.keyCode == 123){
return false;
}
}
const questions = [

{q:"Which sorting algorithm repeatedly compares adjacent elements?",options:["Selection Sort","Bubble Sort","Merge Sort","Quick Sort"],answer:1},

{q:"Binary Search works only on",options:["Unsorted data","Sorted data","Random data","Dynamic data"],answer:1},

{q:"Which of the following is a non-linear data structure?",options:["Stack","Queue","Tree","Array"],answer:2},

{q:"Each node in a linked list contains",options:["Data only","Pointer only","Data and pointer","Address only"],answer:2},

{q:"The time complexity of Binary Search is",options:["O(n²)","O(n)","O(log n)","O(1)"],answer:2},

{q:"Which operation means visiting every node in a linked list?",options:["Insertion","Traversal","Searching","Deletion"],answer:1},

{q:"Which of the following is a linear data structure?",options:["Graph","Tree","Stack","Network"],answer:2},

{q:"Which sorting algorithm uses a pivot element?",options:["Bubble Sort","Selection Sort","Quick Sort","Insertion Sort"],answer:2},

{q:"Space Complexity measures",options:["Time taken by program","Memory used by program","Number of instructions","Program size"],answer:1},

{q:"Which searching technique checks elements one by one?",options:["Binary Search","Linear Search","Tree Search","Quick Search"],answer:1},

{q:"The last node in a singly linked list contains",options:["First node address","NULL pointer","Middle node","Data only"],answer:1},

{q:"Which sorting algorithm selects the smallest element each pass?",options:["Selection Sort","Bubble Sort","Merge Sort","Quick Sort"],answer:0},

{q:"Data structures are mainly classified into",options:["Primitive and Non-Primitive","Static and Dynamic","Linear and Binary","Basic and Advanced"],answer:0},

{q:"Linked list elements are stored in",options:["Continuous memory","Random memory locations","Stack memory","Fixed memory"],answer:1},

{q:"Which sorting algorithm uses divide and conquer technique?",options:["Bubble Sort","Selection Sort","Merge Sort","Insertion Sort"],answer:2},

{q:"Time Complexity measures",options:["Memory usage","Program size","Execution time","Data size"],answer:2},

{q:"Which operation adds a node to a linked list?",options:["Deletion","Insertion","Traversal","Searching"],answer:1},

{q:"Example of primitive data structure",options:["Linked List","Stack","Integer","Tree"],answer:2},

{q:"Which sorting algorithm inserts element in correct position?",options:["Insertion Sort","Bubble Sort","Selection Sort","Merge Sort"],answer:0},

{q:"Binary search reduces the problem size by",options:["One element","Half","Double","Triple"],answer:1},

{q:"Which linked list allows traversal both directions?",options:["Singly Linked List","Circular Linked List","Doubly Linked List","Linear List"],answer:2},

{q:"Which operation removes a node from a linked list?",options:["Insertion","Traversal","Deletion","Searching"],answer:2},

{q:"Linear Search time complexity is",options:["O(n)","O(log n)","O(n²)","O(1)"],answer:0},

{q:"Merge Sort time complexity is",options:["O(n²)","O(n log n)","O(n)","O(log n)"],answer:1},

{q:"Linked list size is",options:["Fixed","Dynamic","Constant","Static"],answer:1},

{q:"Which data structure follows LIFO principle?",options:["Queue","Stack","Array","Tree"],answer:1},

{q:"O(1) time complexity means",options:["Constant time","Linear time","Log time","Quadratic time"],answer:0},

{q:"Which of the following is not a linear data structure?",options:["Array","Queue","Stack","Tree"],answer:3},

{q:"Quick Sort average time complexity is",options:["O(n²)","O(n log n)","O(n)","O(log n)"],answer:1},

{q:"The first node of a linked list is called",options:["Tail","Node","Head","Pointer"],answer:2},

{q:"Stack follows which principle?",options:["FIFO","LIFO","LILO","FILO"],answer:1},

{q:"Insertion in stack is called",options:["Push","Pop","Insert","Delete"],answer:0},

{q:"Deletion in stack is called",options:["Remove","Push","Pop","Delete"],answer:2},

{q:"Stack pointer is called",options:["Front","Rear","Top","Head"],answer:2},

{q:"Stack overflow occurs when",options:["Stack is empty","Stack is full","Stack is half full","Stack has elements"],answer:1},

{q:"Stack underflow occurs when",options:["Stack is empty","Stack is full","Stack has elements","Stack is large"],answer:0},

{q:"The operation used to view top element is",options:["Push","Pop","Peek","Delete"],answer:2},

{q:"Time complexity of push operation",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:2},

{q:"Stack is used in",options:["Recursion","Searching","Sorting","Traversal"],answer:0},

{q:"Stack can be implemented using",options:["Array","Linked list","Both A and B","None"],answer:2},

{q:"Queue follows which principle?",options:["FIFO","LIFO","FILO","LILO"],answer:0},

{q:"Insertion operation in queue is called",options:["Dequeue","Push","Enqueue","Pop"],answer:2},

{q:"Deletion operation in queue is called",options:["Enqueue","Dequeue","Push","Delete"],answer:1},

{q:"In queue insertion takes place at",options:["Front","Rear","Middle","Top"],answer:1},

{q:"In queue deletion takes place at",options:["Front","Rear","Middle","End"],answer:0},

{q:"Queue overflow occurs when",options:["Queue is empty","Queue is full","Queue has elements","Queue has two elements"],answer:1},

{q:"Queue underflow occurs when",options:["Queue is full","Queue is empty","Queue has elements","Queue has many elements"],answer:1},

{q:"Circular queue is used to",options:["Reduce memory","Reuse empty spaces","Increase memory","Delete nodes"],answer:1},

{q:"Queue can be implemented using",options:["Array","Linked list","Both A and B","Tree"],answer:2},

{q:"Time complexity of enqueue operation is",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:2},

{q:"Which of the following is a non-linear data structure?",options:["Array","Linked List","Tree","Stack"],answer:2},

{q:"The topmost node of a tree is called:",options:["Leaf","Root","Parent","Child"],answer:1},

{q:"A node with no children is called:",options:["Parent node","Root node","Leaf node","Internal node"],answer:2},

{q:"A tree with n nodes contains how many edges?",options:["n","n + 1","n − 1","n²"],answer:2},

{q:"Maximum number of children a node can have in a binary tree is:",options:["1","2","3","Unlimited"],answer:1},

{q:"In a Binary Search Tree, left subtree contains:",options:["Greater values","Smaller values","Equal values","Random values"],answer:1},

{q:"In BST, right subtree contains:",options:["Smaller values","Greater values","Equal values","Random values"],answer:1},

{q:"Which traversal gives sorted output in BST?",options:["Preorder","Postorder","Inorder","Level order"],answer:2},

{q:"Preorder traversal order is:",options:["Root → Left → Right","Left → Root → Right","Left → Right → Root","Right → Left → Root"],answer:0},

{q:"Postorder traversal order is:",options:["Root → Left → Right","Left → Root → Right","Left → Right → Root","Root → Right → Left"],answer:2},

{q:"In a full binary tree, each node has:",options:["0 or 2 children","Only 1 child","Maximum 3 children","Unlimited children"],answer:0},

{q:"Which operation is used to add a node in BST?",options:["Search","Insert","Delete","Traverse"],answer:1},

{q:"Which operation removes a node in BST?",options:["Insert","Search","Delete","Traverse"],answer:2},

{q:"Searching in BST starts from:",options:["Leaf node","Root node","Parent node","Any node"],answer:1},

{q:"Which data structure represents hierarchical relationships?",options:["Stack","Queue","Tree","Array"],answer:2},

{q:"A graph consists of:",options:["Nodes and edges","Vertices and edges","Links and lists","Arrays and pointers"],answer:1},

{q:"In graph terminology, a node is also called:",options:["Vertex","Edge","Link","Path"],answer:0},

{q:"An edge connects two:",options:["Vertices","Arrays","Nodes of linked list","Stacks"],answer:0},

{q:"Which traversal technique is used in graphs?",options:["DFS","BFS","Both DFS and BFS","None"],answer:2},

{q:"A graph with no cycles is called:",options:["Tree","Binary tree","Directed graph","Complete graph"],answer:0}

];

questions.sort(() => Math.random() - 0.5);

loadQuiz();


function shuffleOptions(question){

let correct = question.options[question.answer];

question.options.sort(() => Math.random() - 0.5);

question.answer = question.options.indexOf(correct);

}
function loadQuiz(){

const quiz=document.getElementById("quiz");

questions.forEach((q,i)=>{

shuffleOptions(q);

let html=`<div class="question">${i+1}. ${q.q}</div>`;

q.options.forEach((opt,j)=>{
html += `
<div class="options">
<label>
<input type="radio" name="q${i}" value="${j}">
${opt.replace(/</g,"&lt;").replace(/>/g,"&gt;")}
</label>
</div>
`;


});

quiz.innerHTML+=html;

});

}

function submitQuiz(){

let correct = 0;

questions.forEach((q,i)=>{

let selected = document.querySelector(`input[name="q${i}"]:checked`);

if(selected && Number(selected.value) === q.answer){
correct++;
}

});

let total = questions.length;
let incorrect = total - correct;

localStorage.setItem("correct", correct);
localStorage.setItem("incorrect", incorrect);

window.location.href="result.html";

}