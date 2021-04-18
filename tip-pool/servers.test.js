describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should updates server table', () => {
    allServers['server'] = serverNameInput.value;
    updateServerTable();
    expect(serverTbody.children.length).toEqual(1);
  });

  afterEach(function() {
    serverNameInput.value = '';
    Object.keys(allServers).forEach( key => { delete allServers[key] });
    serverTbody.innerHTML = "";
  });
});