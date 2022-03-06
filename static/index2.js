document.getElementById("opened__text").innerText=localStorage.getItem("textValue");
// questions Part
class Question{
    constructor(text,choices,answer){
        this.text=text;
        this.choices=choices;
        this.answer=answer; 
    }

    isCorrectAnswer(choice){
        return (this.answer === choice);
    }
}

  let questions =[
        new Question(
            "Are you feeling good ? ?",
            [ " YES"," NO"],"YES"),
        new Question(
            "How much your temperature is  ?",
                  [ "less than 38","more than 38"],"less then 38"),
         new Question(
              "Do you have headache ?",
              ["YES","NO"],"YES"),
        /*  new Question(
              "to devloppe an android  application  which devlopment envirement should we use?",
              ["flutter","xmarine","android studio","Eclips"],"android studio"),  
              new Question(
                "what does the www mean?",
                ["weird web wide","world web wide","web wide world","web web wide"],"world web wide"),  
                new Question(
                    "what do we need to host a website ?",
                    ["an internet connexion","a server","a bluetooth","a wifi"],"a server"),   
                 new Question(
                        "in which year the first video was made ?",
                        ["1888","1920","1850","1863"],"1888"), 
                 new Question(
                            "The application the most used in film editing ?",
                            ["sony vegas pro ","adobe premiere pro","corel video studio ultimate","adobe photoshop"],"adobe premiere pro"),
                new Question(
                              "What does GDP stand for? ?",
                                ["Gross Domestic Product ","Good Distribution Practice","Global Detection Probability","Global Data Pool"],"Gross Domestic Product"),
                new Question(
                             "What does BMC stand for? ?",
                                   ["Banque Mondiale du Commerce "," Business Model Canvas","Be Modern Cool"," Business Make Constraction "],"Gross Domestic Product"),      
                            */                              
                                     
 ];
 console.log(questions);
  
class Quiz{
    constructor (questions){
        this.score=0;
        this.questions=questions;
        this.currentQuestionIndex=0;

    }
 getCurrentQuestion(){
     return this.questions[this.currentQuestionIndex];

 }  
 guess (answer){
     if (this.getCurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
        console.log(answer);
     }
     this.currentQuestionIndex++; 
 }
 hasEnded(){
     
  return this.currentQuestionIndex >= this.questions.length;
 } 
 
}

//group all the function for the display
const display = { 
    elementShown:function(id,text){
        let element= document.getElementById(id);
        element.innerHTML = text;
    },
    //end quiz
    endQuiz:function(){
         let div = document.getElementById("bg-model");
         let dom=document.getElementById("cont");
          
        if (div.style.display=='none'){
              div.style.display ='flex';
              dom.style.display ='none';
              

          }  
           let endQuizHtml= +quiz.score+"/"+quiz.questions.length;
           if(quiz.score>0){
            var Etat ='You need to see a doctor'

           }
           else{ var Etat ='Congrats you are in a good health '}

    document.getElementById("end").innerText=(endQuizHtml + Etat);// we call the function elementShown 
        
        //replay the game
        document.getElementById("replay").addEventListener("click", replayGame);
        function replayGame(){
           
            window.location.replace("index.html");

        }
         
         },
        

    question:function(){
        this.elementShown("ques",quiz.getCurrentQuestion().text);
  },   
    choices:function(){
        let choices=quiz.getCurrentQuestion().choices;
        guessHandler=(id,guess) => {
            document.getElementById(id).onclick=function(){//take the answer of the gamer
            quiz.guess(guess);
            quizApp();
            }
        }
         //display choices and handel guess
        for (let i=0 ;i<choices.length;i++){
            this.elementShown("choice"+i,choices[i]);
            guessHandler("guess"+i, choices[i]);
        }
    },
    //display the progress
    progress: function() {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress",  currentQuestionNumber + " / " + quiz.questions.length);
      },
    

};
//game logic

quizApp = () => {
    if(quiz.hasEnded()) {
        display.endQuiz();
        //END
    }else {
    //progress
    display.question();
     display.choices();
     display.progress();
     
    }
    
    
}

// 1-- create quiz
let quiz=new Quiz(questions);
 quizApp() // to enter the game logic part 

console.log(quiz.getCurrentQuestion().text);
 