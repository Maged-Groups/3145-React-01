export default function PasswordValidator({ password, passwordConfirmation }) {
    console.log('PasswordValidator rendered')
  //   const { password, passwordConfirmation } = props;

  if (password === "") return(
    <div className="text-sm p-2 bg-sky-100 text-sky-900">
        <p>One uppercase letter, one lowercase letter, one number, and one symbol is required</p>
        <p>Between 8 and 16</p>
    </div>
  );

  return (
    <div className="p-3 text-sm">
      <div>
        <span>{/[A-Z]/.test(password) ? "✔" : "❌"}</span>
        <span>Uppercase letter</span>
      </div>

      <div>
        <span>{/[a-z]/.test(password) ? "✔" : "❌"}</span>
        <span>lowercase letter</span>
      </div>

      <div>
        <span>{/[\d]/.test(password) ? "✔" : "❌"}</span>
        <span>Number</span>
      </div>

      <div>
        <span>{/\W/.test(password) ? "✔" : "❌"}</span>
        <span>Symbol</span>
      </div>

      <div>
        <span>{/^.{8,16}$/.test(password) ? "✔" : "❌"}</span>
        <span>Between 8 and 16</span>
      </div>
      
    </div>
  );
}
