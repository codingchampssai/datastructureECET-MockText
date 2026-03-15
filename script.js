// disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// disable F12
document.onkeydown = function(e){
if(e.keyCode == 123){
return false;
}
}

const questions = [

{q:"What is an Operating System?",options:["Application software","System software","Programming language","Compiler"],answer:1},

{q:"A process is",options:["Program in disk","Program in execution","Program compiled","Program in ROM"],answer:1},

{q:"PCB stands for",options:["Process Control Block","Program Control Block","Process Code Block","Program Code Block"],answer:0},

{q:"The smallest unit of execution is",options:["Process","Thread","Program","File"],answer:1},

{q:"Which OS allows multiple users at the same time?",options:["Batch OS","Multi-user OS","Single user OS","Real-time OS"],answer:1},

{q:"Batch OS executes",options:["Programs randomly","Jobs in groups","Programs in parallel","Files sequentially"],answer:1},

{q:"Spooling mainly uses",options:["RAM","Disk","CPU","Cache"],answer:1},

{q:"Buffering temporarily stores data in",options:["RAM","Disk","CPU","Register"],answer:0},

{q:"Multiprogramming improves",options:["CPU utilization","Disk speed","Network speed","RAM size"],answer:0},

{q:"Which scheduling algorithm executes processes in arrival order?",options:["SJF","FCFS","Round Robin","Priority"],answer:1},

{q:"Which algorithm gives minimum average waiting time?",options:["SJF","FCFS","Round Robin","Priority"],answer:0},

{q:"Round Robin scheduling uses",options:["Priority","Time quantum","Disk speed","Memory size"],answer:1},

{q:"Context switching means",options:["Process creation","CPU switching between processes","Process deletion","Memory allocation"],answer:1},

{q:"Throughput means",options:["Number of completed processes","Waiting time","CPU idle time","Response time"],answer:0},

{q:"Waiting time means",options:["Time spent in ready queue","CPU execution time","Disk time","Response time"],answer:0},

{q:"Response time means",options:["Time to first response","Completion time","CPU time","Waiting time"],answer:0},

{q:"Semaphore is used for",options:["Memory allocation","Process synchronization","File management","Disk scheduling"],answer:1},

{q:"Binary semaphore values are",options:["0 and 1","0 to 10","1 to 100","-1 to 1"],answer:0},

{q:"IPC stands for",options:["Inter Process Communication","Internal Program Control","Input Process Control","Internal Process Communication"],answer:0},

{q:"Deadlock occurs when",options:["Processes wait forever for resources","CPU stops","Disk fails","Memory overflow"],answer:0},

{q:"How many conditions are required for deadlock?",options:["2","3","4","5"],answer:2},

{q:"Which is a deadlock condition?",options:["Mutual exclusion","Circular wait","Hold and wait","All of these"],answer:3},

{q:"Banker's algorithm is used for",options:["Deadlock prevention","Deadlock avoidance","Deadlock detection","Process scheduling"],answer:1},

{q:"Fragmentation means",options:["Wasted memory space","Memory allocation","CPU scheduling","Disk failure"],answer:0},

{q:"External fragmentation occurs when",options:["Free memory is scattered","Memory block is larger than required","CPU idle","Disk error"],answer:0},

{q:"Paging divides memory into",options:["Pages and frames","Segments and blocks","Files and folders","Tracks and sectors"],answer:0},

{q:"Segmentation divides program into",options:["Logical parts","Blocks","Pages","Frames"],answer:0},

{q:"Virtual memory uses",options:["Disk as extra memory","CPU as memory","Cache as disk","RAM as disk"],answer:0},

{q:"Demand paging loads pages",options:["When required","At program start","Randomly","After execution"],answer:0},

{q:"When required page is not in memory",options:["Page hit occurs","Page fault occurs","Disk crash occurs","CPU failure"],answer:1},

{q:"Page replacement is needed when",options:["Memory is full","Disk is full","CPU busy","RAM empty"],answer:0},

{q:"FIFO page replacement means",options:["First page removed first","Last page removed","Random page removed","New page removed"],answer:0},

{q:"LRU stands for",options:["Least Recently Used","Last Random Use","Longest Running Unit","Least Resource Usage"],answer:0},

{q:"Which page replacement algorithm is best theoretically?",options:["FIFO","Optimal","LRU","Random"],answer:1},

{q:"Thrashing occurs when",options:["Too many page faults","CPU idle","Disk failure","Network slow"],answer:0},

{q:"Disk scheduling is used to",options:["Decide order of disk requests","Manage memory","Schedule CPU","Allocate files"],answer:0},

{q:"Disk performance parameter includes",options:["Seek time","Rotational latency","Transfer time","All of these"],answer:3},

{q:"Seek time means",options:["Time for disk head movement","Time for CPU execution","File reading time","RAM allocation"],answer:0},

{q:"FIFO disk scheduling serves requests",options:["In arrival order","Closest request first","Random order","Reverse order"],answer:0},

{q:"SSTF stands for",options:["Shortest Seek Time First","Shortest Service Time First","System Seek Transfer First","Small Seek Time Function"],answer:0},

{q:"SSTF selects",options:["Closest disk request","First request","Last request","Random request"],answer:0},

{q:"SCAN algorithm is also called",options:["Elevator algorithm","Circular algorithm","Random algorithm","Queue algorithm"],answer:0},

{q:"File management means",options:["Managing files on storage","CPU scheduling","Memory allocation","Disk repair"],answer:0},

{q:"Which is a file operation?",options:["Create","Read","Write","All of these"],answer:3},

{q:"Sequential access means",options:["Access data one by one","Random access","Direct access","Block access"],answer:0},

{q:"Direct access means",options:["Access any location directly","Sequential reading","Disk scanning","Random scheduling"],answer:0},

{q:"Contiguous allocation stores files",options:["Continuously","Randomly","Linked blocks","Indexed blocks"],answer:0},

{q:"Linked allocation uses",options:["Pointers","Index blocks","Frames","Pages"],answer:0},

{q:"Indexed allocation uses",options:["Index block","Pointers","Continuous blocks","Random blocks"],answer:0},

{q:"Directory is used to",options:["Organize files","Schedule CPU","Allocate memory","Manage network"],answer:0},

{q:"Single-level directory stores",options:["All files in one directory","Files in many directories","Files in memory","Files in disk blocks"],answer:0},

{q:"Two-level directory means",options:["Separate directory for each user","Two files only","Two processes","Two disks"],answer:0},

{q:"Tree directory structure is",options:["Hierarchical","Linear","Circular","Random"],answer:0},

{q:"Disk platter is",options:["Circular disk surface","CPU chip","RAM block","Disk head"],answer:0},

{q:"Track is",options:["Circular path on disk","Disk surface","Disk head","Memory block"],answer:0},

{q:"Sector is",options:["Smallest disk storage unit","Disk head","Disk track","File"],answer:0},

{q:"Cylinder is",options:["Collection of tracks","Disk head","RAM block","File block"],answer:0},

{q:"Disk head reads data from",options:["Disk surface","CPU","RAM","Network"],answer:0},

{q:"Belady’s anomaly occurs in",options:["FIFO","LRU","Optimal","SSTF"],answer:0},

{q:"Best page replacement algorithm theoretically",options:["Optimal","FIFO","LRU","Random"],answer:0}

];questions.sort(() => Math.random() - 0.5);

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