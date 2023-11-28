 async function shorten(link) {
    const response = await fetch(`https://shortnaverlink.vercel.app/shorten?url=${addProtocolToURL(link)}`);
  const data = await response.json();
  
  if (data && data.result && data.result.data) {
    return data.result.data;
  } else {
    throw new Error("URL 단축 실패!");
  }
  }

  document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      handleShorten();
    }
  });

async function handleShorten() {
  var inputLink = document.getElementById("inputLink").value;
  var shortenedLink = await shorten(inputLink);
    
  var outputTextArea = document.getElementById("output"); 
  var copyButton = document.getElementById("copyButton"); 
  
  outputTextArea.textContent = shortenedLink;
  outputTextArea.style.opacity = 1;
  copyButton.style.opacity = 1;
}

function copyToClipboard(thingToCopy) {
    navigator.clipboard.writeText(thingToCopy);
}

function addProtocolToURL(url) {
  const protocolPattern = /^(http:\/\/|https:\/\/)/;
  if (!protocolPattern.test(url)) {
    return "https://" + url;
  }
  return url;
}

function showToastMessage(message) {
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
  setTimeout(function() {
    document.body.removeChild(toast);
  }, 2000); // 2초 후에 토스트 메시지 제거
}
