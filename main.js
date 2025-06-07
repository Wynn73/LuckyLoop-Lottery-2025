
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Connected:", accounts[0]);
    } catch (error) {
      console.error("User denied wallet connection");
    }
  } else {
    alert("Please install MetaMask to use this feature.");
  }
}

window.onload = connectWallet;
