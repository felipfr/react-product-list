import React from 'react'
import style from './css/productlist.module.css';
import useFetch from './Custom Hooks/useFetch';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <div className={style.loading}></div>;
  if (data)
    return (
      <div className={`${style.content} animeLeft`}>
        {data.map((produto) => (
          <div key={produto.id}>
            <Link to={`./produto/${produto.id}`}><img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} /></Link>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default ProductList