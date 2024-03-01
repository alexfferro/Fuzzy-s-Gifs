import { useState, useEffect } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const GiphyGrid = () => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState('');
  

  useEffect(() => {
    const apiKey = 'rWWLQaTVW1vMhzj2IW8NYyZX2VZ2WXE7';
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`)
      .then(response => response.json())
      .then(data => {
        const gifData = data.data.map(gif => {
          return {
            id: gif.id,
            url: gif.images.fixed_height.url,
            title: gif.title
          };
        });
        setGifs(gifData);
      })
      .catch(error => {
        console.error('Erro ao obter GIFs do Giphy:', error);
      });
  }, []);


  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredData = gifs.filter(gif =>
    gif.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='mx-auto max-w-2xl my-12 space-y-6 px-5'>
      <input
        type="text"
        placeholder="Filtrar por título"
        value={filter}
        onChange={handleFilterChange}
        autoFocus
        className='w-full bg-transparent text-2xl font-semibold tracking-tight outline-none placeholder:text-slate-500 '
      />
      <div className='h-px bg-slate-700'/>
      <Grid
        data={filteredData}
      >
        <Column
        filter="text"
        className='align-middle justify-center text-center w-full border-collapse'
        cell={(props) => <td className='w-full flex flex-1 flex-col p-5'><img src={props.dataItem.url} alt={props.dataItem.title} /></td>} />
      </Grid>
    </div>
  );
};

export default GiphyGrid;
