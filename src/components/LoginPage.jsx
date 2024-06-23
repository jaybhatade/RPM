import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin123') {
      window.location.href = '/';
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[85vh] bg-slate-900">
      <div className="text-white w-full h-fit  flex justify-center items-center mx-auto px-5 max-w-[1240px]">
        <div className="flex rounded-2xl bg-slate-800 items-center justify-center  py-0 sm:px-6 sm:py-16 lg:px-6 lg:py-6  xl:min-w-[750px]">
          <div className="xl:w-[50%]">
            <img src="/Mobile login-rafiki.svg" className="hidden w-80 md:block" alt="" />
          </div>
          <div className="xl:mx-auto  w-full md:w-[50%] p-4 xl:max-w-md 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-white">
              Sign in to your account
            </h2>
            <a href="/" className="mt-2 text-center text-sm text-white/50">
              Dont have an account? Create a free account
            </a>
            <form onSubmit={handleSubmit} className="mt-8" method="POST" action="#" >
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-white/85">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-white/85">
                      Password
                    </label>
                    <a
                      className="text-sm font-semibold text-white hover:underline"
                      title=""
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <div>
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-yellow-300 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-yellow-300/80"
                    type="submit"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                type="button"
              >
                <span className="mr-2 inline-block">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;  