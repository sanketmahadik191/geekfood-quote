import styles from"./Navbar.css"

const Navbar =() =>{
    return(<>
<nav class="navbar navbar-expand-lg bg-body-tertiary"  id="nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="logos">GeekFoods</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          Home
        </li>
        <li class="nav-item">
         Quote
        </li>
        <li class="nav-item">
          Resturants
        </li>
        <li class="nav-item">
         Foods
        </li>
        <li class="nav-item">
          Contact
        </li>
      </ul>
    </div>
    <button id='hide'type="button" class="btn btn-primary">Primary</button>
  </div>
</nav>
  </> )
}

export default Navbar;