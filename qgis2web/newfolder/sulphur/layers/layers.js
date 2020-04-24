var wms_layers = [];

var format_Sulphur_High_0 = new ol.format.GeoJSON();
var features_Sulphur_High_0 = format_Sulphur_High_0.readFeatures(json_Sulphur_High_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulphur_High_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulphur_High_0.addFeatures(features_Sulphur_High_0);
var lyr_Sulphur_High_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulphur_High_0, 
                style: style_Sulphur_High_0,
                interactive: true,
                title: '<img src="styles/legend/Sulphur_High_0.png" /> Sulphur_High'
            });
var format_Sulphur_Medium_1 = new ol.format.GeoJSON();
var features_Sulphur_Medium_1 = format_Sulphur_Medium_1.readFeatures(json_Sulphur_Medium_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulphur_Medium_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulphur_Medium_1.addFeatures(features_Sulphur_Medium_1);
var lyr_Sulphur_Medium_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulphur_Medium_1, 
                style: style_Sulphur_Medium_1,
                interactive: true,
                title: '<img src="styles/legend/Sulphur_Medium_1.png" /> Sulphur_Medium'
            });
var format_Sulphur_low_2 = new ol.format.GeoJSON();
var features_Sulphur_low_2 = format_Sulphur_low_2.readFeatures(json_Sulphur_low_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulphur_low_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulphur_low_2.addFeatures(features_Sulphur_low_2);
var lyr_Sulphur_low_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulphur_low_2, 
                style: style_Sulphur_low_2,
                interactive: true,
                title: '<img src="styles/legend/Sulphur_low_2.png" /> Sulphur_low'
            });
var format_Sulphur_3 = new ol.format.GeoJSON();
var features_Sulphur_3 = format_Sulphur_3.readFeatures(json_Sulphur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulphur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulphur_3.addFeatures(features_Sulphur_3);cluster_Sulphur_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Sulphur_3
});
var lyr_Sulphur_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Sulphur_3, 
                style: style_Sulphur_3,
                interactive: true,
                title: '<img src="styles/legend/Sulphur_3.png" /> Sulphur'
            });

lyr_Sulphur_High_0.setVisible(true);lyr_Sulphur_Medium_1.setVisible(true);lyr_Sulphur_low_2.setVisible(true);lyr_Sulphur_3.setVisible(true);
var layersList = [lyr_Sulphur_High_0,lyr_Sulphur_Medium_1,lyr_Sulphur_low_2,lyr_Sulphur_3];
lyr_Sulphur_High_0.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Sulphur_Medium_1.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Sulphur_low_2.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Sulphur_3.set('fieldAliases', {'F1': 'F1', 'Place': 'Place', 'Lat': 'Lat', 'Lon': 'Lon', 'Nitragen': 'Nitragen', 'Phosphorus': 'Phosphorus', 'Potasium': 'Potasium', 'pH': 'pH', 'EC': 'EC', 'OC': 'OC', 'Sulphur': 'Sulphur', 'Zinc': 'Zinc', 'Copper': 'Copper', 'Manganese': 'Manganese', 'Boron': 'Boron', 'Iron': 'Iron', });
lyr_Sulphur_High_0.set('fieldImages', {'ID': '', 'GRIDCODE': '', });
lyr_Sulphur_Medium_1.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Sulphur_low_2.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Sulphur_3.set('fieldImages', {'F1': 'TextEdit', 'Place': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Nitragen': 'TextEdit', 'Phosphorus': 'TextEdit', 'Potasium': 'TextEdit', 'pH': 'TextEdit', 'EC': 'TextEdit', 'OC': 'TextEdit', 'Sulphur': 'TextEdit', 'Zinc': 'TextEdit', 'Copper': 'TextEdit', 'Manganese': 'TextEdit', 'Boron': 'TextEdit', 'Iron': 'TextEdit', });
lyr_Sulphur_High_0.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Sulphur_Medium_1.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Sulphur_low_2.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Sulphur_3.set('fieldLabels', {'F1': 'no label', 'Place': 'header label', 'Lat': 'no label', 'Lon': 'header label', 'Nitragen': 'header label', 'Phosphorus': 'header label', 'Potasium': 'header label', 'pH': 'header label', 'EC': 'header label', 'OC': 'header label', 'Sulphur': 'header label', 'Zinc': 'header label', 'Copper': 'header label', 'Manganese': 'header label', 'Boron': 'header label', 'Iron': 'no label', });
lyr_Sulphur_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});