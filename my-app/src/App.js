import logo from './logo.svg';
import {Box} from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './App.css';


import React, {useState, useEffect} from "react"
import { SearchBar } from "./components/SearchBar";
import { Options } from './components/Options';
import { NumberBox } from "./components/NumberBox";
function App() {
  return (
    <div className="App">
      <div style={{  
            marginLeft: '50px',
            marginTop: '50px'
        }}>
        <Box sx={{
                width: 400,
                height: 50,
                borderRadius: 1,
                bgcolor: '#6adeeb',
                textAlign: 'center',
                paddingTop: 3
          }}>
          <SearchBar/>
        </Box>
        </div>
        <div style={{  
            marginLeft: '50px',
            marginTop: '50px',
            marginBottom: '50px',
        }}>
        <Box sx={{
                width: 400,
                height: 50,
                borderRadius: 1,
                bgcolor: '#6adeeb',
                textAlign: 'center',
                paddingTop: 3
          }}>
          <SearchBar/>
        </Box>
        </div>
      <div style={{  
            marginLeft: '50px',
        }}> 
            <Box sx={{
              width: 400,
              height: 100,
              borderRadius: 1,
              bgcolor: '#6adeeb',
              textAlign: 'center',
              paddingTop: 1
        }}> 
                Options
                <br></br>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Walk" />
                    <FormControlLabel value="male" control={<Radio />} label="Drive" />
                    <NumberBox/>
                  </RadioGroup>
                </FormControl>
            </Box> 
        </div>
        <div style={{  
            marginLeft: '50px',
            marginTop: '50px',
            marginBottom: '50px',
        }}>
        <Box sx={{
                width: 400,
                height: 50,
                borderRadius: 1,
                bgcolor: 'Transparent',
                textAlign: 'center',
                paddingTop: 3
          }}>
          <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
          <Button>Submit</Button>
         </ButtonGroup>
        </Box>
        </div>
        
    </div>
  );
}

export default App;