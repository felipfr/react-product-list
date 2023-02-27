import React from 'react'
import style from './css/product.module.css';
import useFetch from './Custom Hooks/useFetch';
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom';

const ProductList = ({ id }) => {
  const { request, data, loading, error } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      let { response, json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`,
      );
      console.log(response, json);
      if (response.status === 404) navigate('/404');
    }
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <div className={style.loading}></div>;
  if (data)
    return (
      <>
        {console.log(data)}
        <Helmet>
          <title>{data.nome}</title>
        </Helmet>
        <div className={`${style.container} animeLeft`}>
          <div key={data.id} className={style.image}>
            {data.fotos && data.fotos.length > 0 && (
              <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
            )}</div>
          <div className={style.description}>
            <h1>{data.nome}</h1>
            <div className={style.price}>R$ {data.preco}</div>
            <p>{data.descricao}</p>
          </div>
        </div>
      </>
    );
  else return null;
};

export default ProductList