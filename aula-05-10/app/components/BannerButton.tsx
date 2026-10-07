export default function BannerButton(){
    return (
        <div className="w-full flex justify-center mt-10">
  <div className="w-full mx-5 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
    <button className="bg-red-800 rounded-sm px-5 py-3 text-white font-bold w-full md:w-60">
      Get started
    </button>
    <button className="bg-black text-white rounded-sm px-5 py-3 font-bold w-full md:w-60">
      learn more
    </button>
  </div>
</div>

    )
}