import { useNavigate } from 'react-router-dom';

export default function useBackNavigation() {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return {
    handleGoBack,
  };
}
