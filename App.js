import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';


function Select() {
  const [data, setData] = useState();
  const [ selectedOption, setSelectedOption ] = useState();
  const [mappedData, setMappedData ] = useState();

  useEffect(async () => {
    const result = await axios.get(
      'https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/',
    );
 
    setData(result.data.results);

  }, []);

 useEffect(() => {
   if(data) {
    const map = data.map(element => {
      return {
        label: element.diretoria,
        value: element.dre
      }
    });
    
    setMappedData(map);
      console.log({ data: data })
      console.log({ map })  
   }
  }, data);

  useEffect(() => {
    console.log({ selectedOption })
  }, [selectedOption]);
  

  return (
    <div className="select">
      <Select options={mappedData} value={selectedOption} onChange={e => setSelectedOption(e)}/>
    </div>
  );
}

export default Select;
