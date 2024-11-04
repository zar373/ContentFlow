"use client";

import axios from "axios";

export default function Home() {
  const buyProduct1 = async () => {
    try {
      const response = await axios.post("/api/purchaseProduct", {
        productId: "583706",
      });

      console.log(response.data);

      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.error(error);
      alert("Failed to buy product #1");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="p-60 mgt-20 rounded-2xl bg-gradient-to-br from-[#36C6D0] via-[#3cd5e0] to-[#278fb5] flex items-center justify-center h-full">
        <div className="flex flex-col items-center px-4 py-2 bg-white rounded-2xl shadow-inner text-[#36C6D0]">
          <h1 className="text-lg font-bold mb-2 text-center">
            ContentFlow Pro: Unlimited Access to AI-Powered Content Generation
          </h1>
          <h2 className="text-md font-semibold mb-4 text-center">PKR 900.00</h2>
          <ul className="list-disc list-inside mb-4 text-left"> {/* Bullet points list */}
            <li>Unlock unlimited credits for content generation</li>
            <li>Generate high-quality blog titles, full articles, and social media captions</li>
            <li>Ideal for marketers, bloggers, and content creators</li>
            <li>Fast and accurate AI-powered content generation</li>
          </ul>
          <button
            onClick={buyProduct1}
            className="px-6 py-3 bg-white text-[#36C6D0] font-bold rounded-full border border-[#36C6D0] hover:bg-[#36C6D0] hover:text-white transition duration-300"
          >
            Buy Subscription for 900PKR
          </button>
        </div>
      </div>
    </main>
  );
}
