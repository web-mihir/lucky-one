import React, { useEffect, useState } from 'react';

const Question = () => {
   const [question, setQuestion] = useState([]);

   useEffect(() => {
      fetch("question.json")
         .then(res => res.json())
         .then(data => setQuestion(data));
   }, []);

   return (
      <section className='Question_section mt-5 py-5'>
         <div className="container">
            <h1 className="fw-bold my-3">FAQ</h1>
            <div className="row">
               {
                  question.map(item => {
                     const { id, question, answer } = item;
                     return (
                        <div className="col-12" key={id}>
                           <article className='text-start'>
                              <strong>{question}</strong>
                              <p>
                                 {answer}
                              </p>
                           </article>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </section>
   );
};

export default Question;