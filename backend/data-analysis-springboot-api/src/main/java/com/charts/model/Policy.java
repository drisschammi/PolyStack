package com.charts.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "policy")
public class Policy {

    @Id
    @Column(name = "policy_id")
    private String policy_id; // Use the dataset's policy_id as the primary key.

    @Column(name = "date_of_purchase", nullable = false)
    private LocalDateTime date_of_purchase;

    @Column(name = "fuel", nullable = false)
    private String fuel;

    @Column(name = "vehicle_segment", nullable = false)
    private String vehicle_segment;

    @Column(name = "premium", nullable = false)
    private BigDecimal premium;

    @Column(name = "bodily_injury_liability", nullable = false)
    private boolean bodily_injury_liability;

    @Column(name = "personal_injury_protection", nullable = false)
    private boolean personal_injury_protection;

    @Column(name = "property_damage_liability", nullable = false)
    private boolean property_damage_liability;

    @Column(name = "collision", nullable = false)
    private boolean collision;

    @Column(name = "comprehensive", nullable = false)
    private boolean comprehensive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id", nullable = false)
    private Customer customer;

}