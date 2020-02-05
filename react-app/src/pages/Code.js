import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestDecode, requestEncode } from "../store/actions/codeActions";

const Code = () => {
  const [data, setData] = useState({
    encode: "",
    decode: "",
    secret: ""
  });
  const dispatch = useDispatch();
  const { encode, decode } = useSelector(state => state);

  const inputHandler = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (decode) {
      setData({ ...data, decode, encode: "" });
    }
  }, [decode, setData]);

  useEffect(() => {
    if (encode) {
      setData({ ...data, encode, decode: "" });
    }
  }, [encode, setData]);

  const encodeHandler = () => {
    const { encode, secret } = data;
    dispatch(requestEncode({ encode, secret }));
  };

  const decodeHandler = () => {
    const { decode, secret } = data;
    dispatch(requestDecode({ decode, secret }));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Encode"
                name="encode"
                value={data.encode}
                onChange={inputHandler}
              />
            </div>
          </form>
          <div className="row mb-3">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Secret"
                name="secret"
                value={data.secret}
                onChange={inputHandler}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary btn-block"
                onClick={encodeHandler}
              >
                v
              </button>
            </div>
            <div className="col-2">
              <button
                className="btn btn-danger btn-block"
                onClick={decodeHandler}
              >
                ^
              </button>
            </div>
          </div>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Decode"
                name="decode"
                value={data.decode}
                onChange={inputHandler}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Code;
