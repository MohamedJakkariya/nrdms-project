var wms_layers = [];

var format_Copper_High_0 = new ol.format.GeoJSON();
var features_Copper_High_0 = format_Copper_High_0.readFeatures(json_Copper_High_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copper_High_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copper_High_0.addFeatures(features_Copper_High_0);
var lyr_Copper_High_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Copper_High_0, 
                style: style_Copper_High_0,
                interactive: true,
                title: '<img src="styles/legend/Copper_High_0.png" /> Copper_High'
            });
var format_Copper_Medium_1 = new ol.format.GeoJSON();
var features_Copper_Medium_1 = format_Copper_Medium_1.readFeatures(json_Copper_Medium_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copper_Medium_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copper_Medium_1.addFeatures(features_Copper_Medium_1);
var lyr_Copper_Medium_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Copper_Medium_1, 
                style: style_Copper_Medium_1,
                interactive: true,
                title: '<img src="styles/legend/Copper_Medium_1.png" /> Copper_Medium'
            });
var format_Copper_Low_2 = new ol.format.GeoJSON();
var features_Copper_Low_2 = format_Copper_Low_2.readFeatures(json_Copper_Low_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copper_Low_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copper_Low_2.addFeatures(features_Copper_Low_2);
var lyr_Copper_Low_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Copper_Low_2, 
                style: style_Copper_Low_2,
                interactive: true,
                title: '<img src="styles/legend/Copper_Low_2.png" /> Copper_Low'
            });
var format_Copper_3 = new ol.format.GeoJSON();
var features_Copper_3 = format_Copper_3.readFeatures(json_Copper_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copper_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copper_3.addFeatures(features_Copper_3);cluster_Copper_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Copper_3
});
var lyr_Copper_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Copper_3, 
                style: style_Copper_3,
                interactive: true,
                title: '<img src="styles/legend/Copper_3.png" /> Copper'
            });

lyr_Copper_High_0.setVisible(true);lyr_Copper_Medium_1.setVisible(true);lyr_Copper_Low_2.setVisible(true);lyr_Copper_3.setVisible(true);
var layersList = [lyr_Copper_High_0,lyr_Copper_Medium_1,lyr_Copper_Low_2,lyr_Copper_3];
lyr_Copper_High_0.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Copper_Medium_1.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Copper_Low_2.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Copper_3.set('fieldAliases', {'F1': 'F1', 'Place': 'Place', 'Lat': 'Lat', 'Lon': 'Lon', 'Nitragen': 'Nitragen', 'Phosphorus': 'Phosphorus', 'Potasium': 'Potasium', 'pH': 'pH', 'EC': 'EC', 'OC': 'OC', 'Sulphur': 'Sulphur', 'Zinc': 'Zinc', 'Copper': 'Copper', 'Manganese': 'Manganese', 'Boron': 'Boron', 'Iron': 'Iron', });
lyr_Copper_High_0.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Copper_Medium_1.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Copper_Low_2.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Copper_3.set('fieldImages', {'F1': 'TextEdit', 'Place': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Nitragen': 'TextEdit', 'Phosphorus': 'TextEdit', 'Potasium': 'TextEdit', 'pH': 'TextEdit', 'EC': 'TextEdit', 'OC': 'TextEdit', 'Sulphur': 'TextEdit', 'Zinc': 'TextEdit', 'Copper': 'TextEdit', 'Manganese': 'TextEdit', 'Boron': 'TextEdit', 'Iron': 'TextEdit', });
lyr_Copper_High_0.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Copper_Medium_1.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Copper_Low_2.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Copper_3.set('fieldLabels', {'F1': 'no label', 'Place': 'header label', 'Lat': 'no label', 'Lon': 'header label', 'Nitragen': 'header label', 'Phosphorus': 'header label', 'Potasium': 'header label', 'pH': 'header label', 'EC': 'header label', 'OC': 'header label', 'Sulphur': 'header label', 'Zinc': 'header label', 'Copper': 'header label', 'Manganese': 'header label', 'Boron': 'header label', 'Iron': 'no label', });
lyr_Copper_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});