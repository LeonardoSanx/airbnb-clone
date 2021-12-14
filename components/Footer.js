export default function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-8 md:px-24 lg:px-32 py-14
    bg-gray-100 text-gray-600"
    >
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold text-xs">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold text-xs">COMMUNITY</h5>
        <p>Accessbility</p>
        <p>This is not a real site</p>
        <p>It's a clone</p>
        <p>Referrals accepted</p>
        <p>Leonardo</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold text-xs">HOST</h5>
        <p>Leonardo</p>
        <p>Developer</p>
        <p>Hire me</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold text-xs">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}
