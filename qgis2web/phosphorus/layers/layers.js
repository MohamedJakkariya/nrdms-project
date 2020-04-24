var wms_layers = [];

var format_Phosphorus_High_0 = new ol.format.GeoJSON();
var features_Phosphorus_High_0 = format_Phosphorus_High_0.readFeatures(json_Phosphorus_High_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phosphorus_High_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phosphorus_High_0.addFeatures(features_Phosphorus_High_0);
var lyr_Phosphorus_High_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phosphorus_High_0, 
                style: style_Phosphorus_High_0,
                interactive: true,
                title: '<img src="styles/legend/Phosphorus_High_0.png" /> Phosphorus_High'
            });
var format_Phosphorus_Medium_1 = new ol.format.GeoJSON();
var features_Phosphorus_Medium_1 = format_Phosphorus_Medium_1.readFeatures(json_Phosphorus_Medium_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phosphorus_Medium_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phosphorus_Medium_1.addFeatures(features_Phosphorus_Medium_1);
var lyr_Phosphorus_Medium_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phosphorus_Medium_1, 
                style: style_Phosphorus_Medium_1,
                interactive: true,
                title: '<img src="styles/legend/Phosphorus_Medium_1.png" /> Phosphorus_Medium'
            });
var format_Phosphorus_low_2 = new ol.format.GeoJSON();
var features_Phosphorus_low_2 = format_Phosphorus_low_2.readFeatures(json_Phosphorus_low_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phosphorus_low_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phosphorus_low_2.addFeatures(features_Phosphorus_low_2);
var lyr_Phosphorus_low_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phosphorus_low_2, 
                style: style_Phosphorus_low_2,
                interactive: true,
                title: '<img src="styles/legend/Phosphorus_low_2.png" /> Phosphorus_low'
            });
var format_Phosphorus_3 = new ol.format.GeoJSON();
var features_Phosphorus_3 = format_Phosphorus_3.readFeatures(json_Phosphorus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phosphorus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phosphorus_3.addFeatures(features_Phosphorus_3);cluster_Phosphorus_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Phosphorus_3
});
var lyr_Phosphorus_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Phosphorus_3, 
                style: style_Phosphorus_3,
                interactive: true,
                title: '<img src="styles/legend/Phosphorus_3.png" /> Phosphorus'
            });

lyr_Phosphorus_High_0.setVisible(true);lyr_Phosphorus_Medium_1.setVisible(true);lyr_Phosphorus_low_2.setVisible(true);lyr_Phosphorus_3.setVisible(true);
var layersList = [lyr_Phosphorus_High_0,lyr_Phosphorus_Medium_1,lyr_Phosphorus_low_2,lyr_Phosphorus_3];
lyr_Phosphorus_High_0.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Phosphorus_Medium_1.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Phosphorus_low_2.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Phosphorus_3.set('fieldAliases', {'F1': 'F1', 'Place': 'Place', 'Lat': 'Lat', 'Lon': 'Lon', 'Nitragen': 'Nitragen', 'Phosphorus': 'Phosphorus', 'Potasium': 'Potasium', 'pH': 'pH', 'EC': 'EC', 'OC': 'OC', 'Sulphur': 'Sulphur', 'Zinc': 'Zinc', 'Copper': 'Copper', 'Manganese': 'Manganese', 'Boron': 'Boron', 'Iron': 'Iron', });
lyr_Phosphorus_High_0.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Phosphorus_Medium_1.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Phosphorus_low_2.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Phosphorus_3.set('fieldImages', {'F1': 'TextEdit', 'Place': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Nitragen': 'TextEdit', 'Phosphorus': 'TextEdit', 'Potasium': 'TextEdit', 'pH': 'TextEdit', 'EC': 'TextEdit', 'OC': 'TextEdit', 'Sulphur': 'TextEdit', 'Zinc': 'TextEdit', 'Copper': 'TextEdit', 'Manganese': 'TextEdit', 'Boron': 'TextEdit', 'Iron': 'TextEdit', });
lyr_Phosphorus_High_0.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Phosphorus_Medium_1.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Phosphorus_low_2.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Phosphorus_3.set('fieldLabels', {'F1': 'no label', 'Place': 'header label', 'Lat': 'no label', 'Lon': 'header label', 'Nitragen': 'header label', 'Phosphorus': 'header label', 'Potasium': 'header label', 'pH': 'header label', 'EC': 'header label', 'OC': 'header label', 'Sulphur': 'header label', 'Zinc': 'header label', 'Copper': 'header label', 'Manganese': 'header label', 'Boron': 'header label', 'Iron': 'no label', });
lyr_Phosphorus_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});