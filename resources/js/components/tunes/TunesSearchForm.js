import React,{useRef} from 'react';
import { debounce } from 'lodash-es'


function TunesSearchForm(props) {
    const searchInput = useRef(null)

    
      
    function handleSubmit(e){
        e.preventDefault();
        searchForMusic()
       
    }
    

    const handleInput = debounce((e) =>{
       searchForMusic()
    }, 500)
   
    function searchForMusic(){
        let searchString = searchInput.current.value;
        if(searchString)props.onSearch(searchString);

    }

    return (
       
          
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} ref={searchInput} autoFocus className="form-control-lg input" type="text" ></input>
            </form>
           
     
      
      

    )}
export default TunesSearchForm;

