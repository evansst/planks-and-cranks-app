export default function loginPage() {

    return `
      <div class="container text-center w-25">
        <div id="formContent">
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
            <label for="inputUsername" class="sr-only">Username</label>
            <input type="username" id="inputUsername" class="form-control" placeholder="Username" required="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
      </div>
      `;
}