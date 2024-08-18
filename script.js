//                                                  practice problem 8 
//                                                ----------------------



//  Q) Build a character counter for a text area or input fields, which updates in realtime when user types and enforce a character limit


//  A) 




                            var text = document.querySelector("textarea")
                            var counter = document.querySelector("#counter")


                            text.addEventListener("input", function(){

                                counter.textContent = text.value.length
                                
                            })