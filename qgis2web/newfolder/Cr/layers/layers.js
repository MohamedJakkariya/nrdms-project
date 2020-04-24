var wms_layers = [];

var format_Cr_High_0 = new ol.format.GeoJSON();
var features_Cr_High_0 = format_Cr_High_0.readFeatures(json_Cr_High_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cr_High_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cr_High_0.addFeatures(features_Cr_High_0);
var lyr_Cr_High_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cr_High_0, 
                style: style_Cr_High_0,
                interactive: true,
                title: '<img src="styles/legend/Cr_High_0.png" /> Cr_High'
            });
var format_Cr_Medium_1 = new ol.format.GeoJSON();
var features_Cr_Medium_1 = format_Cr_Medium_1.readFeatures(json_Cr_Medium_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cr_Medium_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cr_Medium_1.addFeatures(features_Cr_Medium_1);
var lyr_Cr_Medium_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cr_Medium_1, 
                style: style_Cr_Medium_1,
                interactive: true,
                title: '<img src="styles/legend/Cr_Medium_1.png" /> Cr_Medium'
            });
var format_Cr_Low_2 = new ol.format.GeoJSON();
var features_Cr_Low_2 = format_Cr_Low_2.readFeatures(json_Cr_Low_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cr_Low_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cr_Low_2.addFeatures(features_Cr_Low_2);
var lyr_Cr_Low_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cr_Low_2, 
                style: style_Cr_Low_2,
                interactive: true,
                title: '<img src="styles/legend/Cr_Low_2.png" /> Cr_Low'
            });
var format_Locations_3 = new ol.format.GeoJSON();
var features_Locations_3 = format_Locations_3.readFeatures(json_Locations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locations_3.addFeatures(features_Locations_3);cluster_Locations_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Locations_3
});
var lyr_Locations_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Locations_3, 
                style: style_Locations_3,
                interactive: true,
                title: '<img src="styles/legend/Locations_3.png" /> Locations'
            });

lyr_Cr_High_0.setVisible(true);lyr_Cr_Medium_1.setVisible(true);lyr_Cr_Low_2.setVisible(true);lyr_Locations_3.setVisible(true);
var layersList = [lyr_Cr_High_0,lyr_Cr_Medium_1,lyr_Cr_Low_2,lyr_Locations_3];
lyr_Cr_High_0.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Cr_Medium_1.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Cr_Low_2.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', });
lyr_Locations_3.set('fieldAliases', {'S_No': 'S_No', 'Places': 'Places', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'pH': 'pH', 'EC': 'EC', 'Salinity': 'Salinity', 'TDS': 'TDS', 'N': 'N', 'P': 'P', 'K': 'K', 'Mn': 'Mn', 'Mg': 'Mg', 'NH3': 'NH3', 'Al': 'Al', 'Fe': 'Fe', 'Cu': 'Cu', 'Ca': 'Ca', 'Cl': 'Cl', 'S': 'S', 'Cd': 'Cd', 'Zn': 'Zn', 'Pb': 'Pb', 'Cr': 'Cr', });
lyr_Cr_High_0.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Cr_Medium_1.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Cr_Low_2.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', });
lyr_Locations_3.set('fieldImages', {'S_No': 'TextEdit', 'Places': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'pH': 'TextEdit', 'EC': 'TextEdit', 'Salinity': 'TextEdit', 'TDS': 'TextEdit', 'N': 'TextEdit', 'P': 'TextEdit', 'K': 'TextEdit', 'Mn': 'TextEdit', 'Mg': 'TextEdit', 'NH3': 'TextEdit', 'Al': 'TextEdit', 'Fe': 'TextEdit', 'Cu': 'TextEdit', 'Ca': 'TextEdit', 'Cl': 'TextEdit', 'S': 'TextEdit', 'Cd': 'TextEdit', 'Zn': 'TextEdit', 'Pb': 'TextEdit', 'Cr': 'TextEdit', });
lyr_Cr_High_0.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Cr_Medium_1.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Cr_Low_2.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', });
lyr_Locations_3.set('fieldLabels', {'S_No': 'no label', 'Places': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'pH': 'header label', 'EC': 'header label', 'Salinity': 'header label', 'TDS': 'header label', 'N': 'header label', 'P': 'header label', 'K': 'header label', 'Mn': 'header label', 'Mg': 'header label', 'NH3': 'header label', 'Al': 'header label', 'Fe': 'header label', 'Cu': 'header label', 'Ca': 'header label', 'Cl': 'header label', 'S': 'header label', 'Cd': 'header label', 'Zn': 'header label', 'Pb': 'header label', 'Cr': 'header label', });
lyr_Locations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});