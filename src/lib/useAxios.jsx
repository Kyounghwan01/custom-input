import { useState, useEffect } from "react";
import axios from "axios";

/**
 * example
 *
 * import {useAxios} from 'hooks/useAxios';
 * const {loading, data, err, refatch} = useAxios({ url: 'https:~~~' })
 *
 *  <button onClick={refatch}>refatch</button>
 *
 *  todo: get/post/patch/delete 분기처리
 */

const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    err: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);

  if (!opts.url) return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({ ...state, loading: false, data, err: null });
      })
      .catch(err => {
        setState({ ...state, loading: false, err, data: null });
      });
  }, [axiosInstance, opts, state, trigger]);

  const refatch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  return { ...state, refatch };
};

export default useAxios;
