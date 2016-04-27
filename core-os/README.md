# CoreOS Notes

https://coreos.com/validate

https://discovery.etcd.io/new
https://discovery.etcd.io/74b59c33e0b5ab93354715c29179f663

curl -w "\n" 'https://discovery.etcd.io/new?size=6'

curl -L 169.254.169.254/metadata/v1/user-data

systemctl status -l etcd2
journalctl -b -u etcd2

ls /run/systemd/system

## Add a unit

fleetctl submit mongo.service

fleetctl list-unit-files

fleetctl list-units

fleetctl cat mongo.service

fleetctl load mongo.service

fleetctl start mongo.service

fleetctl status mongo.service

fleetctl journal mongo.service

fleetctl ssh mongo

fleetctl stop mongo.service

fleetctl unload mongo.service

fleetctl destroy mongo.service
