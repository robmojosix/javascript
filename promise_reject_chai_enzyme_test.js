describe('Reject #getHistory', () => {
   let app;
   beforeEach(() => {
     app = shallow(<App />);
     app.instance().selectDepartment(null, {value: 'gifts'});

     const rejection = {response: {status: 404}};
     sinon.stub(axios, 'get').returns(Promise.reject(rejection));
   });
   afterEach(() => {
     axios.get.restore();
   });

   it('sets default history state when a history file cannot be foud on S3', (done) => {
     Promise.resolve(app.instance().getHistory()).then(() => {
       reject();
     }).catch(() => {
       expect(app.state('history')).to.not.equal('');
       done();
     });
   });
 });
