const http = require("http");
const httpServer = http.createServer();

httpServer.on("request", (req, res) => {
  res.end("request received");
});

httpServer.listen(3500, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});

// TCP Dump commands linux

// sudo tcpdump -D
// display all available interfaces i.e lo [Up, Running, Loopback], wlo1 [Up, Running], docker0 [Up], bluetooth0

// tcpdump -n  -XX -v -i lo src port [3500] or dst port [3500]
//-n = numbers, -v = verbose, -i lo (capture specified interfaces in this case loop back-lo) , src- source , dst -destination

// tcpdump -XX -i lo
// To display packets in HEX and ASCII values

// tcpdump -w captured_packets.pcap -n -v -XX -i lo src port 3500 or dst port 3500
// save captured packets into a file - captured_packets.pcap

// sudo tcpdump -r captured_packets.pcap
// read captured packets from the specified file

// tcpdump -XX -i lo tcp
// capture only TCP packets
