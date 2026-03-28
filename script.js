// Questions Bank
const rawQuestions =   [
  

{question:"Which sorting algorithm repeatedly compares adjacent elements?",options:["Selection Sort","Bubble Sort","Merge Sort","Quick Sort"],answer:"Bubble Sort"},
{question:"Binary Search works only on",options:["Unsorted data","Sorted data","Random data","Dynamic data"],answer:"Sorted data"},
{question:"Which of the following is a non-linear data structure?",options:["Stack","Queue","Tree","Array"],answer:"Tree"},
{question:"Each node in a linked list contains",options:["Data only","Pointer only","Data and pointer","Address only"],answer:"Data and pointer"},
{question:"The time complexity of Binary Search is",options:["O(n²)","O(n)","O(log n)","O(1)"],answer:"O(log n)"},
{question:"Which operation means visiting every node in a linked list?",options:["Insertion","Traversal","Searching","Deletion"],answer:"Traversal"},
{question:"Which of the following is a linear data structure?",options:["Graph","Tree","Stack","Network"],answer:"Stack"},
{question:"Which sorting algorithm uses a pivot element?",options:["Bubble Sort","Selection Sort","Quick Sort","Insertion Sort"],answer:"Quick Sort"},
{question:"Space Complexity measures",options:["Time taken by program","Memory used by program","Number of instructions","Program size"],answer:"Memory used by program"},
{question:"Which searching technique checks elements one by one?",options:["Binary Search","Linear Search","Tree Search","Quick Search"],answer:"Linear Search"},
{question:"The last node in a singly linked list contains",options:["First node address","NULL pointer","Middle node","Data only"],answer:"NULL pointer"},
{question:"Which sorting algorithm selects the smallest element each pass?",options:["Selection Sort","Bubble Sort","Merge Sort","Quick Sort"],answer:"Selection Sort"},
{question:"Data structures are mainly classified into",options:["Primitive and Non-Primitive","Static and Dynamic","Linear and Binary","Basic and Advanced"],answer:"Primitive and Non-Primitive"},
{question:"Linked list elements are stored in",options:["Continuous memory","Random memory locations","Stack memory","Fixed memory"],answer:"Random memory locations"},
{question:"Which sorting algorithm uses divide and conquer technique?",options:["Bubble Sort","Selection Sort","Merge Sort","Insertion Sort"],answer:"Merge Sort"},
{question:"Time Complexity measures",options:["Memory usage","Program size","Execution time","Data size"],answer:"Execution time"},
{question:"Which operation adds a node to a linked list?",options:["Deletion","Insertion","Traversal","Searching"],answer:"Insertion"},
{question:"Example of primitive data structure",options:["Linked List","Stack","Integer","Tree"],answer:"Integer"},
{question:"Which sorting algorithm inserts element in correct position?",options:["Insertion Sort","Bubble Sort","Selection Sort","Merge Sort"],answer:"Insertion Sort"},
{question:"Binary search reduces the problem size by",options:["One element","Half","Double","Triple"],answer:"Half"},
{question:"Which linked list allows traversal both directions?",options:["Singly Linked List","Circular Linked List","Doubly Linked List","Linear List"],answer:"Doubly Linked List"},
{question:"Which operation removes a node from a linked list?",options:["Insertion","Traversal","Deletion","Searching"],answer:"Deletion"},
{question:"Linear Search time complexity is",options:["O(n)","O(log n)","O(n²)","O(1)"],answer:"O(n)"},
{question:"Merge Sort time complexity is",options:["O(n²)","O(n log n)","O(n)","O(log n)"],answer:"O(n log n)"},
{question:"Linked list size is",options:["Fixed","Dynamic","Constant","Static"],answer:"Dynamic"},
{question:"Which data structure follows LIFO principle?",options:["Queue","Stack","Array","Tree"],answer:"Stack"},
{question:"O(1) time complexity means",options:["Constant time","Linear time","Log time","Quadratic time"],answer:"Constant time"},
{question:"Which of the following is not a linear data structure?",options:["Array","Queue","Stack","Tree"],answer:"Tree"},
{question:"Quick Sort average time complexity is",options:["O(n²)","O(n log n)","O(n)","O(log n)"],answer:"O(n log n)"},
{question:"The first node of a linked list is called",options:["Tail","Node","Head","Pointer"],answer:"Head"},
{question:"Stack follows which principle?",options:["FIFO","LIFO","LILO","FILO"],answer:"LIFO"},
{question:"Insertion in stack is called",options:["Push","Pop","Insert","Delete"],answer:"Push"},
{question:"Deletion in stack is called",options:["Remove","Push","Pop","Delete"],answer:"Pop"},
{question:"Stack pointer is called",options:["Front","Rear","Top","Head"],answer:"Top"},
{question:"Stack overflow occurs when",options:["Stack is empty","Stack is full","Stack is half full","Stack has elements"],answer:"Stack is full"},
{question:"Stack underflow occurs when",options:["Stack is empty","Stack is full","Stack has elements","Stack is large"],answer:"Stack is empty"},
{question:"The operation used to view top element is",options:["Push","Pop","Peek","Delete"],answer:"Peek"},
{question:"Time complexity of push operation",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:"O(1)"},
{question:"Stack is used in",options:["Recursion","Searching","Sorting","Traversal"],answer:"Recursion"},
{question:"Stack can be implemented using",options:["Array","Linked list","Both A and B","None"],answer:"Both A and B"},
{question:"Queue follows which principle?",options:["FIFO","LIFO","FILO","LILO"],answer:"FIFO"},
{question:"Insertion operation in queue is called",options:["Dequeue","Push","Enqueue","Pop"],answer:"Enqueue"},
{question:"Deletion operation in queue is called",options:["Enqueue","Dequeue","Push","Delete"],answer:"Dequeue"},
{question:"In queue insertion takes place at",options:["Front","Rear","Middle","Top"],answer:"Rear"},
{question:"In queue deletion takes place at",options:["Front","Rear","Middle","End"],answer:"Front"},
{question:"Queue overflow occurs when",options:["Queue is empty","Queue is full","Queue has elements","Queue has two elements"],answer:"Queue is full"},
{question:"Queue underflow occurs when",options:["Queue is full","Queue is empty","Queue has elements","Queue has many elements"],answer:"Queue is empty"},
{question:"Circular queue is used to",options:["Reduce memory","Reuse empty spaces","Increase memory","Delete nodes"],answer:"Reuse empty spaces"},
{question:"Queue can be implemented using",options:["Array","Linked list","Both A and B","Tree"],answer:"Both A and B"},
{question:"Time complexity of enqueue operation is",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:"O(1)"},
{question:"Which of the following is a non-linear data structure?",options:["Array","Linked List","Tree","Stack"],answer:"Tree"},
{question:"The topmost node of a tree is called:",options:["Leaf","Root","Parent","Child"],answer:"Root"},
{question:"A node with no children is called:",options:["Parent node","Root node","Leaf node","Internal node"],answer:"Leaf node"},
{question:"A tree with n nodes contains how many edges?",options:["n","n + 1","n − 1","n²"],answer:"n − 1"},
{question:"Maximum number of children a node can have in a binary tree is:",options:["1","2","3","Unlimited"],answer:"2"},
{question:"In a Binary Search Tree, left subtree contains:",options:["Greater values","Smaller values","Equal values","Random values"],answer:"Smaller values"},
{question:"In BST, right subtree contains:",options:["Smaller values","Greater values","Equal values","Random values"],answer:"Greater values"},
{question:"Which traversal gives sorted output in BST?",options:["Preorder","Postorder","Inorder","Level order"],answer:"Inorder"},
{question:"Preorder traversal order is:",options:["Root → Left → Right","Left → Root → Right","Left → Right → Root","Right → Left → Root"],answer:"Root → Left → Right"},
{question:"Postorder traversal order is:",options:["Root → Left → Right","Left → Root → Right","Left → Right → Root","Root → Right → Left"],answer:"Left → Right → Root"},
{question:"In a full binary tree, each node has:",options:["0 or 2 children","Only 1 child","Maximum 3 children","Unlimited children"],answer:"0 or 2 children"},
{question:"Which operation is used to add a node in BST?",options:["Search","Insert","Delete","Traverse"],answer:"Insert"},
{question:"Which operation removes a node in BST?",options:["Insert","Search","Delete","Traverse"],answer:"Delete"},
{question:"Searching in BST starts from:",options:["Leaf node","Root node","Parent node","Any node"],answer:"Root node"},
{question:"Which data structure represents hierarchical relationships?",options:["Stack","Queue","Tree","Array"],answer:"Tree"},
{question:"A graph consists of:",options:["Nodes and edges","Vertices and edges","Links and lists","Arrays and pointers"],answer:"Vertices and edges"},
{question:"In graph terminology, a node is also called:",options:["Vertex","Edge","Link","Path"],answer:"Vertex"},
{question:"An edge connects two:",options:["Vertices","Arrays","Nodes of linked list","Stacks"],answer:"Vertices"},
{question:"Which traversal technique is used in graphs?",options:["DFS","BFS","Both DFS and BFS","None"],answer:"Both DFS and BFS"},
{question:"A graph with no cycles is called:",options:["Tree","Binary tree","Directed graph","Complete graph"],answer:"Tree"}


]
 



// Shuffle function
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

let quizQuestions = [];

function initQuiz() {
    quizQuestions = JSON.parse(JSON.stringify(rawQuestions));

    shuffle(quizQuestions);

    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        q.id = index + 1; // ✅ ADD ID

        shuffle(q.options);

        const card = document.createElement('div');
        card.className = 'question-card';

        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = `${index + 1}. ${q.question}`; // ✅ FIX
        card.appendChild(title);

        q.options.forEach(opt => { // ✅ FIX
            const label = document.createElement('label');
            label.className = 'option-label';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${q.id}`;
            radio.value = opt;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + opt));

            card.appendChild(label);
        });

        container.appendChild(card);
    });
}

document.getElementById('submit-btn').addEventListener('click', () => {
    let score = 0;
    let userAnswers = {};

    quizQuestions.forEach(q => {
        const selected = document.querySelector(`input[name="question-${q.id}"]:checked`);
        
        if (selected) {
            userAnswers[q.id] = selected.value;

            if (selected.value === q.answer) { // ✅ FIX
                score++;
            }
        } else {
            userAnswers[q.id] = null;
        }
    });

    const sessionData = {
        score: score,
        total: quizQuestions.length,
        userAnswers: userAnswers,
        shuffledQuestions: quizQuestions
    };

    localStorage.setItem('ecet_current_session', JSON.stringify(sessionData));

    window.location.href = 'result.html';
});

window.onload = initQuiz;
