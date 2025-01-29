package com.charts.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "customer")
public class Customer {

    @Id
    @Column(name = "customer_id")
    private String customer_id;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "income_group", nullable = false)
    private String income_group;

    @Column(name = "region", nullable = false)
    private String region;

    @Column(name = "marital_status", nullable = false)
    private Boolean marital_status;

}
