import { getAlldata } from '../../api/search';

const handleSearch = async () => {
  const data = await getAlldata();
  console.log('data: ', data);
}

export { handleSearch };
