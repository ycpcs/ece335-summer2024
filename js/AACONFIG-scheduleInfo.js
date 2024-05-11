// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("Lecture 1: Intro to Discrete Math", "lectures/lecture01.html","Lecture 2: Deductive Reasoning and Logical Connectives","lectures/lecture02.html"),
		reading: "Intro. pg. 1-6, 1.1 pg. 8-13",
	},
	{
		topic: new DoubleTopic("Lecture 3: Truth Tables", "lectures/lecture03.html","Lecture 4: The Conditional and Biconditional Connectives","lectures/lecture04.html"),
		reading: "1.2 pg. 15-24, 1.5 pg. 45-55",
	},
	{
		topic: new DoubleTopic("Lecture 5: Quantifiers", "lectures/lecture05.html","Assignment 1 Due","assign/assign01.html"),
		reading: "2.1 pg. 58-66",
	},
	{
		topic: new Topic("Lecture 6: Equivalencies Involving Quantifiers", "lectures/lecture06.html"),
		reading: "2.2 pg. 68-76",
	},
	{
		topic: new TripleTopic("Lecture 7: Variables and Sets", "lectures/lecture07.html","Lecture 8: Operations on Sets","lectures/lecture08.html","Assignment 2 Due","assign/assign02.html"),
		reading: "1.3 pg. 26-33, 1.4 pg. 35-43",
	},
	{
		topic: new Topic("** Exam 1", "")
	},
	{
		topic: new DoubleTopic("Lecture 8: Operations on Sets cont.","lectures/lecture08.html","Lecture 9: More Operations on Sets","lectures/lecture09.html"),
		reading: "1.4 pg. 35-43, 2.3 pg. 78-86",
	},
	{
		topic: new Topic("Lecture 9: More Operations on Sets","lectures/lecture09.html"),
		reading: "2.3 pg. 78-86",
	},
	{
		topic: new TripleTopic("Lecture 10: Proof Strategies", "lectures/lecture10.html","Lecture 11: Proofs Involving Negations and Conditionals","lectures/lecture11.html", "Assignment 3 Due","assign/assign03.html"),
		reading: "3.1 pg. 89-98, 3.2 pg. 100-111",
	},
	{
		topic: new Topic("Lecture 11: Proofs Involving Negations and Conditionals cont.","lectures/lecture11.html"),
		reading: "3.2 pg. 100-111",
	},
	{
		topic: new DoubleTopic("Lecture 12: Proofs Involving Quantifiers","lectures/lecture12.html", "Assignment 4 Due","assign/assign04.html"),
		reading: "3.3 pg. 113-127",
	},
// 4th of July Break
	{
		topic: new Topic("Lecture 12: Proofs Involving Quantifiers cont.","lectures/lecture12.html"),
		reading: "3.3 pg. 113-127",
	},
	{
		topic: new Topic("Lecture 13: Proofs Involving Conjunctions and Biconditionals","lectures/lecture13.html"),
		reading: "3.4 pg. 130-139",
	},
	{
		topic: new DoubleTopic("Lecture 14: Proofs Involving Disjunctions","lectures/lecture14.html", "Assignment 5 Due","assign/assign05.html"),
		reading: "3.5 pg. 142-150",
	},
	{
		topic: new Topic("** Exam 2", "")
	},
	{
		topic: new Topic("Lecture 16: Proof by Mathematical Induction","lectures/lecture16.html"),
		reading: "6.1 pg. 273-278",
	},
	{
		topic: new Topic("Lecture 17: Recursion","lectures/lecture17.html"),
		reading: "6.3 pg. 293-299",
	},
//	{
//		topic: new TripleTopic("Lecture 18: Relations","lectures/lecture18.html","Lecture //18 Practice Problem","handouts/lecture18/lecture18-handout.pdf","Lecture 18 Practice //Problem Solution","handouts/lecture18/lecture18-handoutSol.pdf"),
//		reading: "4.1-4.3 pg. 163-186",
//	},
	{
		topic: new DoubleTopic("Lecture 19: Functions","lectures/lecture19.html","Lecture 20: Function Properties","lectures/lecture20.html"),
		reading: "5.1 pg. 229-236, 5.2-5.3 pg. 240-256",
	},
	{
		topic: new DoubleTopic("Exam 3 Review", "", "Assignment 6 Due","assign/assign06.html")
	},
	{
		topic: new Topic("** Exam 3", "")
	},
	{
		topic: new Topic("** NO CLASS", "")
	},
	{
		topic: new Topic("Final Exam Review", "")
	},
	{
		topic: new Topic("** Final Exam", "")
	},

];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
//		new FinalExamDay("102", new Date("05/09/2022 10:15:00")),
//		new FinalExamDay("101", new Date("05/11/2022 08:00:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
