import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="form-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="名前">名前</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="パスワード">パスワード</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
