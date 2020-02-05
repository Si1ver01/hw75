export const ENCODE = "ENCODE";
export const DECODE = "DECODE";

export const encode = str => ({ type: ENCODE, payload: str });
export const decode = str => ({ type: DECODE, payload: str });

export const requestEncode = data => async dispatch => {
  const response = await fetch("/caesar/encode", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { decode } = await response.json();
  dispatch(encode(decode));
};

export const requestDecode = data => async dispatch => {
  const response = await fetch("/caesar/decode", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { encode } = await response.json();
  dispatch(decode(encode));
};
