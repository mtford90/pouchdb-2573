describe('expected pouch behaviour', function () {
    it('test delete', function (done) {
        var pouch = new PouchDB('sdfsdf');
        pouch.post({blah: 1}, function (err, resp) {
            if (err) done(new Error(err));
            pouch.get(resp.id, function (err, doc) {
                if (err) done(new Error(err));
                pouch.remove(doc._id, doc._rev, function (err) {
                    dump(PouchDB.version);
                    done(err ? new Error(err) : undefined);
                });
            });
        });
    });

    it('test delete with doc pattern', function (done) {
        var pouch = new PouchDB('sdfsdf');
        pouch.post({blah: 1}, function (err, resp) {
            if (err) done(new Error(err));
            pouch.get(resp.id, function (err, doc) {
                if (err) done(new Error(err));
                pouch.remove(doc, function (err) {
                    dump(PouchDB.version);
                    done(err ? new Error(err) : undefined);
                });
            });
        });
    });
});
