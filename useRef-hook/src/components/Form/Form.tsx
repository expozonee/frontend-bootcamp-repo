import { useState, useRef, BaseSyntheticEvent } from "react";

type Data = {
  isAllDataValid: boolean;
  error: {
    [key: string]: string;
  };
  data: {
    [key: string]: string;
  };
};

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState<Data>({
    isAllDataValid: false,
    error: {},
    data: {},
  });

  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    const username = data.data.username;
    const email = data.data.email;

    setData((prev) => {
      return {
        ...prev,
        isAllDataValid: false,
      };
    });

    let firstInvalidInput: HTMLInputElement | null = null;

    if (!formRef.current) return;

    const usernameInput: HTMLInputElement | null =
      formRef.current.querySelector("[name=username]");

    const emailInput: HTMLInputElement | null =
      formRef.current.querySelector("[name=email]");

    if (!usernameInput || !emailInput) return;

    if (!username) {
      setData((prev) => {
        return {
          ...prev,
          error: {
            ...prev.error,
            username: "Username is required!",
          },
        };
      });

      if (!firstInvalidInput) {
        firstInvalidInput = usernameInput;
      }
    } else if (username.length < 3) {
      setData((prev) => {
        const newData = { ...prev };
        newData.error.username = "Username length must be 3 or longer";
        return newData;
      });

      if (!firstInvalidInput) {
        firstInvalidInput = usernameInput;
      }
    } else {
      setData((prev) => {
        const newData = { ...prev };
        delete newData.error.username;

        return newData;
      });
    }

    if (!email) {
      setData((prev) => {
        return {
          ...prev,
          error: {
            ...prev.error,
            email: "Email is required!",
          },
        };
      });

      if (!firstInvalidInput) {
        firstInvalidInput = emailInput;
      }
    } else if (!email.includes("@")) {
      setData((prev) => {
        const newData = { ...prev };
        newData.error.email = "Email must contain @";
        return newData;
      });

      if (!firstInvalidInput) {
        firstInvalidInput = emailInput;
      }
    } else {
      setData((prev) => {
        const newData = { ...prev };
        delete newData.error.email;

        return newData;
      });
    }

    if (firstInvalidInput) {
      firstInvalidInput.focus();
      return;
    } else {
      setData((prev) => {
        const newData = { ...prev };
        newData.isAllDataValid = true;
        newData.data = {};
        newData.error = {};

        return newData;
      });
    }
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "0 auto",
        }}
        ref={formRef}
        onSubmit={handleSubmit}
        action="#"
      >
        <input
          placeholder="Please enter your username"
          value={data.data.username ?? ""}
          onChange={(e) => {
            setData((prev) => {
              const newData = { ...prev };
              newData.data.username = e.target.value;
              return newData;
            });
          }}
          name="username"
          type="text"
        />
        {data.error.username && <p>{data.error.username}</p>}
        <input
          placeholder="Please enter your email"
          value={data.data.email ?? ""}
          onChange={(e) => {
            setData((prev) => {
              const newData = { ...prev };
              newData.data.email = e.target.value;
              return newData;
            });
          }}
          name="email"
          type="text"
        />
        {data.error.email && <p>{data.error.email}</p>}

        <button type="submit">Submit</button>
      </form>
      {data.isAllDataValid && <p>Form Submitted!</p>}
    </div>
  );
}
