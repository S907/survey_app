
import React, { useEffect, useState } from 'react'

function Survey(props) {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [totalQuestions, setTotalQuestions] = useState('');
    const [surveyData, setSurveyData] = useState(null);
    // const [answers, setAnswers] = useState([]);

    // console.log('ans', answers);
    // console.log('curre', currentQuestion);
    console.log('totalQuestions', typeof totalQuestions);
    console.log('surveyData', surveyData);
    
    const handleNext = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setCurrentQuestion(currentQuestion+1)
        
    };
    
    console.log('map',props.jsonData.map(data => data));
    
    useEffect(() => {
        // Filters out the surveys with category "survey"
        const exSurvey = props.jsonData.map(data => data)
        const surveys = props.jsonData.filter(survey => survey.category === "survey")
        console.log('survey',surveys);
        console.log('length',exSurvey.length);
        setSurveyData(surveys);
        setTotalQuestions(exSurvey.length)
        
    }, []);

    console.log('valllll', typeof currentQuestion, typeof totalQuestions);
    if (!surveyData) {
        return <div>Loading...</div>;
    } else if (currentQuestion > totalQuestions) {
        return <div>Thank you for completing the survey!</div>;
    } else {
        console.log("Current Question smaller than total");
    }
    console.log('43',currentQuestion);
    const currentSurvey = surveyData[currentQuestion - 1];
    console.log('51',currentSurvey);
    //const parsedJsonData = JSON.parse(currentSurvey.json_data)
    const findKeys = Object.keys(JSON.parse(currentSurvey.json_data).surveys)
    console.log('keys',findKeys);
    //console.log('parse',parsedJsonData);
    //returning the nested object
    // const question = parsedJsonData.surveys[`question${currentQuestion}`];
    // console.log('ques',question);
    
    

    if(surveyData[0]){
        return (
            <div className='container d-flex align-items-center'>
    
            <div className="card d-flex align-items-center" style={{width: '18rem'}}>
            <div className="card-body">
                
                <h2 className="card-title">{currentSurvey.survey_title}</h2>
                <p className="card-subtitle mb-2 text-muted">{currentSurvey.survey_description}</p>
                <p>Question {currentQuestion} of {totalQuestions}</p>
             <div className="container">
               {JSON.parse(currentSurvey.json_data).surveys && findKeys.map((quesId, index)=>(
                
                <div key={quesId} style={{ display: index === currentQuestion+1 ? 'block' : 'none' }}>
                <h3>{JSON.parse(currentSurvey.json_data).surveys[quesId].question}</h3>
                {JSON.parse(currentSurvey.json_data).surveys[quesId].options.map(option=>(
                   
                    <div key={option.value}>
                    <label>
                      <input type="radio" value={option.value} />
                      {option.label}
                    </label>
                  </div>
                    
                ))}
                
                <button onClick={handleNext}>Next</button> 
                </div>
    
            ))}
    
            </div>
            </div>
            </div>
    
                 
                {/* <div className="container" style={{border: '2px solid red'}}>
                <h3>{question.question}</h3>
                {question.options.map(option => (
    
                    <div key={option.value}>
                        <label>
                            <input type="radio" name="answer" value={option.value} />
                            {option.label}
                        </label>
                    </div>
                ))}
                </div> */}
    
            </div>
        );

    }

}

export default Survey

