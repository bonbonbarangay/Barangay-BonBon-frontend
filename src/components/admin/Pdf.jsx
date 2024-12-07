import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10, // Reduced padding for compact layout
  },
  title: {
    fontSize: 12, // Smaller title
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "semibold",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderColor: "#ddd",
    borderWidth: 0.5,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellHeader: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 4,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#f2f2f2",
    fontSize: 11,
    flex: 1,
  },
  tableCell: {
    padding: 4,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    textAlign: "center",
    fontSize: 10,
    flex: 1,
  },
  noResultsText: {
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 10,
    fontSize: 8, // Smaller font size for "No Results"
  },
});

const Pdf = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>HOUSEHOLD HEAD DATA REPORT</Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellHeader}>Full Name</Text>
            <Text style={styles.tableCellHeader}>Gender</Text>
            <Text style={styles.tableCellHeader}>Birthday</Text>
            <Text style={styles.tableCellHeader}>Address</Text>
            <Text style={styles.tableCellHeader}>Mobile No#</Text>
          </View>

          {data.length === 0 ? (
            <Text style={styles.noResultsText}>No results found.</Text>
          ) : (
            data
              .filter((item) => item.pending == false)
              .map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  <Text style={styles.tableCell}>
                    {item.firstnamehead1} {item.lastnamehead1}
                  </Text>
                  <Text style={styles.tableCell}>{item.genderhead1}</Text>
                  <Text style={styles.tableCell}>{item.dateofbirthhead1}</Text>
                  <Text style={styles.tableCell}>{item.addresshead1}</Text>
                  <Text style={styles.tableCell}>{item.mobilenohead1}</Text>
                </View>
              ))
          )}
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
