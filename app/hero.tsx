export function Hero() {
  return (
    <div className="hero grid grid-cols-2">
      <div className="hero-desc flex flex-col h-screen justify-center space-y-3">
        <h1>Be The Fastest in Delivery Your Food</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sint tempore explicabo fuga aliquid modi.</p>
        <button>Get Started</button>
      </div>
      <div className="hero-images flex flex-col justify-center content-center space-y-10">
        <div className="image">Image 1</div>
        <div className="image">Image 2</div>
        <div className="image">Image 3</div>
      </div>
    </div>
  );
}